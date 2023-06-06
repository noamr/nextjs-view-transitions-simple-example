import Link from "next/link";
import { useRouter } from "next/router";
import { useNextRouterViewTransitions } from "use-view-transitions/next";
import { usePathname } from "next/navigation";

import "./style.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useNextRouterViewTransitions(router);
  const pathname = usePathname();
  return (
    <main data-pathname={pathname}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <Component {...pageProps} />
    </main>
  );
}
