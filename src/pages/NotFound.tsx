import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center bg-muted">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="headline-xl text-5xl md:text-7xl lg:text-8xl mb-6">
              404 — Page
              <br />
              Leaked Out
              <br />
              Somewhere!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Looks like this page blew away in the last storm. But don't worry,
              we've got the tools to get you back on track.
            </p>
            <Link to="/">
              <Button className="bg-foreground text-background hover:bg-foreground/90 uppercase font-semibold text-lg px-8 py-6 group">
                <Home className="mr-2 h-5 w-5" />
                Go Back Home
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
