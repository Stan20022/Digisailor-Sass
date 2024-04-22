"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import {
  DotsThreeVertical,
  PencilSimple,
  LockKeyOpen,
  Trash,
  Plus,
} from "phosphor-react";

type User = {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
};

type Company = {
  name: string;
  email: string;
  isLogInEnabled: boolean;
};

type UserCardProps = User & {
  index: number;
  isOpen: boolean;
  onOpen: (index: number) => void;
};

const Users: User[] = [
  {
    name: "Editor",
    email: "editor@example.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    name: "Assistant",
    email: "assistant@example.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    name: "Hedley Ware",
    email: "lycosovyma@mailinator.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    name: "Emerson Harper",
    email: "najez@mailinator.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    name: "Dieter Montgomery",
    email: "fetafomex@mailinator.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    name: "Ahmed Figueroa",
    email: "revybyvo@mailinator.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    name: "Armando Barton",
    email: "sema@mallinator.com",
    role: "Company",
    imageUrl: "https://via.placeholder.com/50",
  },
];

const CompanyManagementPage = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [newCompany, setNewCompany] = useState<Company>({
    name: "",
    email: "",
    isLogInEnabled: false,
  });
  const [companies, setCompanies] = useState<Company[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(index === openDropdownIndex ? -1 : index);
  };

  const handleCompanyModalClose = () => {
    setShowCompanyModal(false);
    setNewCompany({ name: "", email: "", isLogInEnabled: false });
  };

  const handleCompanyModalSubmit = () => {
    setCompanies([...companies, newCompany]);
    handleCompanyModalClose();
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleAddCompany = () => {
    setIsLoading(true); // Set isLoading to true when the button is clicked
    // Simulating an asynchronous operation with a timeout
    setTimeout(() => {
      setShowCompanyModal(true);
      setIsLoading(false); // Set isLoading back to false after the operation is complete
    }, 200); // Adjust the delay as needed
  };
  const LoadingAnimation = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main"></div>
      </div>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div className="flex bg-white min-h-screen" ref={containerRef}>
      <main className="py-4 px-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold"></h2>
          <button
            className="bg-main text-white px-2 py-2 rounded-md flex items-center"
            onClick={handleAddCompany}
          >
            <Plus size={20} className="" />
          </button>
        </div>
        <div
          className="grid h-96 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          style={{ height: "600px", gap: "20px" }}
        >
          {Users.map((user, index) => (
            <UserCard
              key={index}
              index={index}
              name={user.name}
              email={user.email}
              role={user.role}
              imageUrl={user.imageUrl}
              isOpen={index === openDropdownIndex}
              onOpen={toggleDropdown}
            />
          ))}
        </div>
      </main>

      {showCompanyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Create New Company</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={newCompany.name}
                onChange={(e) =>
                  setNewCompany({ ...newCompany, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={newCompany.email}
                onChange={(e) =>
                  setNewCompany({ ...newCompany, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4 flex items-center">
              <div
                className={`relative flex items-center bg-main rounded-full w-12 h-6 transition-colors duration-300 ${
                  newCompany.isLogInEnabled ? "bg-main" : ""
                }`}
                onClick={() =>
                  setNewCompany({
                    ...newCompany,
                    isLogInEnabled: !newCompany.isLogInEnabled,
                  })
                }
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    newCompany.isLogInEnabled
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </div>
              <label
                htmlFor="login-enabled"
                className="ml-3 font-medium text-gray-700"
              >
                Login is enabled
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                onClick={handleCompanyModalClose}
              >
                Cancel
              </button>
              <button
                className="bg-main text-white px-4 py-2 rounded-md"
                onClick={handleCompanyModalSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {isLoading && <LoadingAnimation />}
    </div>
  );
};
const UserCard = ({
  index,
  name,
  email,
  role,
  imageUrl,
  isOpen,
  onOpen,
}: UserCardProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onOpen(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, onOpen]);

  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-4 relative"
      style={{ height: "350px", gap: "20px" }}
    >
      <div className="items-center">
        <div className="items-center">
          <div className="flex">
            <div style={{ marginTop: "-10px" }}>
              <span className="bg-main text-white font-bold py-1 px-3 rounded">
                {role}
              </span>
            </div>
            <div
              className="relative"
              style={{
                top: "-14px",
                marginLeft: "200px",
                marginTop: "15px",
                position: "absolute",
              }}
            >
              <button
                className="focus:outline-none rounded-full"
                onClick={() => onOpen(index)}
              >
                <DotsThreeVertical size={24} />
              </button>
              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="bg-white rounded-lg border border-green-400 mt-2 py-2 w-48 absolute z-10 left-0 right-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div className="flex items-center px-4 py-2 rounded-t-lg hover:bg-main cursor-pointer   transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <PencilSimple size={16} className="mr-2" />
                    <span>Edit</span>
                  </div>
                  <div className="flex items-center px-4 py-2 hover:bg-main cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <LockKeyOpen size={16} className="mr-2" />
                    <span>Reset Password</span>
                  </div>
                  <div className="flex items-center px-4 py-2 rounded-b-lg hover:bg-main cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <Trash size={16} className="mr-2" />
                    <span>Delete</span>
                  </div>
                  {/* Add more options as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="block justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="rounded-full ml-10 mt-8 w-24 h-24"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className=" px-4 py-2 rounded-md mr-2">FREE</div>
          <button className="bg-main text-white px-4 py-2 rounded-md">
            Upgrade Plan
          </button>
        </div>
        <div className="flex justify-center mt-2"></div>
        <div className="flex justify-center mt-2">
          <div className="bg-gray-200 px-4 py-2 rounded-md">
            Plan Expired | Lifetime
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyManagementPage;