import { NextResponse } from 'next/server';
import fs from 'fs';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const raw = fs.readFileSync('h:/strava management/index.html.before-strava-content-backup.html', 'utf8');

    let idx = raw.indexOf('dedicated to serving brands');
    if (idx === -1) idx = raw.indexOf('60+');

    if (idx === -1) {
      return NextResponse.json({ error: 'Text not found in backup file' });
    }

    let startIdx = raw.lastIndexOf('<section', idx);
    let endIdx = raw.indexOf('</section>', idx) + 10;

    let html = raw.substring(startIdx, endIdx);

    // Remove base64 data URLs to prevent SWC parser 2.5MB line overflow
    // Replace src="data:image/...base64,..." with the data-img URL or clean image URL
    const liMatches = html.match(/<li[\s\S]*?<\/li>/g) || [];

    const cleanLis = liMatches.map((liHtml) => {
      const nameMatch = liHtml.match(/data-name="([^"]*)"/);
      const titleMatch = liHtml.match(/data-title="([^"]*)"/);
      const skillsMatch = liHtml.match(/data-skills="([^"]*)"/);
      const imgMatch = liHtml.match(/data-img="([^"]*)"/);

      const name = nameMatch ? nameMatch[1] : '';
      const title = titleMatch ? titleMatch[1] : '';
      const skills = skillsMatch ? skillsMatch[1] : '';
      let img = imgMatch ? imgMatch[1].replace(/&amp;/g, '&') : '';

      if (!img) {
        img = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=350&q=80';
      }

      return `          <li className="group relative cursor-pointer" data-name="${name}" data-title="${title}" data-skills="${skills}" data-img="${img}">
            <img className="w-full h-auto duration-300" src="${img}" alt="${name}" />
            <svg className="absolute w-full h-full inset-0 opacity-0 group-hover:opacity-100" preserveAspectRatio="none" viewBox="0 0 121 208" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M112.5 0V6H113.5V0H112.5ZM115 8.5L121 8.5V7.5L115 7.5V8.5ZM0 199.5H6V200.5H0V199.5ZM121 199.5H115V200.5H121V199.5ZM112.5 208V202H113.5V208H112.5ZM8.5 202L8.5 208H7.5L7.5 202H8.5ZM0 8.5L6 8.5V7.5L0 7.5V8.5ZM8.5 6L8.5 0H7.5L7.5 6H8.5Z" fill="#1b1b1b"></path>
            </svg>
          </li>`;
    });

    const jsxCode = `'use client';

export default function TeamSection() {
  return (
    <section className="py-12 bg-[#f5f2ee] text-[#1b1b1b]">
      <div className="container mx-auto px-4">
        <div className="h3 text-center lg:text-left text-2xl lg:text-4xl font-bold uppercase mb-[35px] lg:mt-[25px] lg:mb-[70px]">
          60+ brand activists<br />dedicated to serving brands
        </div>
        <div className="relative my-16 lg:my-[70px]">
          <ul className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-2">
${cleanLis.join('\n')}
          </ul>
        </div>
      </div>
    </section>
  );
}
`;

    fs.writeFileSync('h:/strava management/components/TeamSection.jsx', jsxCode);

    return NextResponse.json({ success: true, count: cleanLis.length });
  } catch (err) {
    return NextResponse.json({ error: err.message, stack: err.stack });
  }
}
