// Icons

import { landingPageMenu } from "@/lib/constants";
import Link from "next/link";

const LandingPage = () => {
  return (
    <section className="px-8">
      <div className="flex">
        <div className="w-[20%] text-sm py-8">
          {landingPageMenu.map((landingPage, landingPageKey) => (
            <Link
              href={landingPage.href}
              key={landingPageKey}
              className="p-4 flex justify-between items-center"
            >
              {landingPage.name} <landingPage.icon />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="w-[80%]"></div>
      </div>
    </section>
  );
};

export default LandingPage;
