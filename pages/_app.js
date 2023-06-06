import Link from "next/link";
import { useRouter } from "next/router";
import {useNextRouterViewTransitions} from "use-view-transitions/next";
import { usePathname } from "next/navigation";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useNextRouterViewTransitions(router);
    const pathname = usePathname();
    return <>
        <style dangerouslySetInnerHTML={{__html:`
            body {
                font-family: Sans-Serif;
                display: block !important;
            }
            nav {
                display: flex;
            }
            nav a {
                display: block;
                text-decoration: none;
                background: lightgreen;
                border-radius: 10px;
                margin: 20px;
                padding: 20px;
            }
            h1 span {
                background: lightblue;
                padding: 20px;
                border-radius: 10px;
            }

            main {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `}} />
        <main>
        <nav>
            <Link href="/about" style={{viewTransitionName: pathname === "/about" ? "none" : "about"}}>About</Link>
            <Link href="/home" style={{viewTransitionName: pathname === "/home" ? "none" : "home"}}>Home</Link>
        </nav>
        <Component {...pageProps} />

        </main>
    </>
}