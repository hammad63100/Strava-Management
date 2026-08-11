import { ViewProvider } from "../components/ViewContext";
import MainApp from "../components/MainApp";

export default function Page() {
  return (
    <ViewProvider>
      <MainApp />
    </ViewProvider>
  );
}
