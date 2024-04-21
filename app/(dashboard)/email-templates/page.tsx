"use client";
import { FC, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Icons
import { AiOutlineSend } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/providers/AuthContextProvider";

const EmailTemplates: FC = () => {
  const { userDetails } = useAuth();
  const [isEmailMenu, setIsEmailMenu] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="px-8 h-[90vh] overflow-y-scroll">
      <div className="flex">
        <div className="w-[25%] text-sm py-8">
          <div
            onClick={() => setIsEmailMenu(false)}
            className="flex justify-between items-center p-2 cursor-pointer border rounded-sm hover:bg-gray-100 sticky top-5"
          >
            Business Email Template
            <MdChevronRight className="text-lg" />
          </div>

          <div
            onClick={() => setIsEmailMenu(true)}
            className="flex justify-between items-center p-2 cursor-pointer border rounded-sm hover:bg-gray-100 sticky top-20 mt-4"
          >
            Employee Email Template
            <MdChevronRight className="text-lg" />
          </div>
        </div>

        {/* Actions */}
        <div className="w-[75%]">
          {/* Business Email Template */}
          <div className="p-8">
            <div className="border p-4 rounded-lg">
              {/* Heading */}
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">
                  {isEmailMenu
                    ? "Employee Email Template"
                    : "Business Email Template"}
                </h1>

                <div className="text-main cursor-pointer">Edit</div>
              </div>

              <div className="rounded-sm mt-4 p-2">
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="flex justify-between items-center">
                    {/* To Email */}
                    <div>
                      <label
                        htmlFor="toEmail"
                        className="text-sm flex justify-start items-center gap-2"
                      >
                        To Email<span className="text-red-600">*</span>
                      </label>
                      <Input type="email" id="toEmail" className="h-8" />
                    </div>

                    {/* BCC */}
                    <div>
                      <label
                        htmlFor="bcc"
                        className="text-sm flex justify-start items-center gap-2"
                      >
                        BCC <span>(optional)</span>
                      </label>
                      <Input type="email" id="bcc" className="h-8" />
                    </div>

                    {/* CC */}
                    <div>
                      <label
                        htmlFor="cc"
                        className="text-sm flex justify-start items-center gap-2"
                      >
                        CC <span>(optional)</span>
                      </label>
                      <Input type="email" id="cc" className="h-8" />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mt-4">
                    <label
                      htmlFor="subject"
                      className="text-sm flex justify-start items-center gap-2"
                    >
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <Input type="text" id="subject" className="w-72 h-8" />
                  </div>

                  {/* content */}
                  <div className="mt-4">
                    <label
                      htmlFor="content"
                      className="text-sm flex justify-start items-center gap-2"
                    >
                      Content <span className="text-red-600">*</span>
                    </label>
                    <Textarea
                      id="content"
                      placeholder={
                        isEmailMenu
                          ? "Hi, Good Morning! This is Employee Email Template"
                          : "Hi, Good Morning! This is Business Email Template"
                      }
                    />
                  </div>

                  <Button
                    className="mt-4 bg-main border-main text-white hover:text-main hover:bg-white"
                    variant={"outline"}
                  >
                    Send <AiOutlineSend className="ml-4 text-lg" />
                  </Button>

                  <div className="text-red-600 text-xs mt-4">
                    ** This is your from email address&nbsp;
                    {userDetails?.email}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailTemplates;
