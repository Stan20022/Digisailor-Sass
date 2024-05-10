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
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../../../lib/firebase"; // Replace with the actual path to your Firebase configuration
import { useSelectedLayoutSegments } from "next/navigation";
import { useRouter } from "next/navigation";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type User = {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
};

type Company = {
  id: string;
  name: string;
  email: string;
  isLogInEnabled: boolean;
  imageUrl: string;
};

type UserCardProps = User & {
  index: number;
  isOpen: boolean;
  onOpen: (index: number) => void;
  onEdit: (company: Company) => void;
  onDelete: (companyId: string) => void;
  company: Company;
};

const CompanyManagementPage = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newCompany, setNewCompany] = useState<Company>({
    id: "",
    name: "",
    email: "",
    isLogInEnabled: false,
    imageUrl: "",
  });
  const [editCompany, setEditCompany] = useState<Company | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(index === openDropdownIndex ? -1 : index);
  };

  const handleCompanyModalClose = () => {
    setShowCompanyModal(false);
    setNewCompany({
      id: "",
      name: "",
      email: "",
      isLogInEnabled: false,
      imageUrl: "",
    });
    setImageUpload(null);
  };

  const handleCompanyModalSubmit = async () => {
    try {
      const { id, ...companyData } = newCompany;
      let imageUrl = "";
      if (imageUpload) {
        imageUrl = await uploadImage(imageUpload);
      }
      const docRef = await addDoc(collection(db, "companies"), {
        ...companyData,
        imageUrl,
      });
      const newCompanyWithId = { id: docRef.id, ...companyData, imageUrl };
      setCompanies([...companies, newCompanyWithId]);
      handleCompanyModalClose();
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const handleUpdateCompany = async (company: Company) => {
    try {
      setEditCompany(company);
      setShowEditModal(true);
    } catch (error) {
      console.error("Error updating company:", error);
    }
  };

  const handleEditCompanySubmit = async () => {
    try {
      if (editCompany) {
        let imageUrl = editCompany.imageUrl;
        if (imageUpload) {
          imageUrl = await uploadImage(imageUpload);
        }
        const companyRef = doc(db, "companies", editCompany.id);
        await updateDoc(companyRef, { ...editCompany, imageUrl });
        fetchCompanies();
        setShowEditModal(false);
        setEditCompany(null);
        setImageUpload(null);
      }
    } catch (error) {
      console.error("Error updating company:", error);
    }
  };

  const handleDeleteCompany = async (companyId: string) => {
    try {
      const companyRef = doc(db, "companies", companyId);
      await deleteDoc(companyRef);
      fetchCompanies();
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "companies"));
      const companies = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        isLogInEnabled: doc.data().isLogInEnabled,
        imageUrl: doc.data().imageUrl || "",
      }));
      setCompanies(companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleAddCompany = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowCompanyModal(true);
      setIsLoading(false);
    }, 200);
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

  // Function to upload an image to Firebase Storage
  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `company-images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress if needed
        },
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

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
          {companies.map((company, index) => (
            <UserCard
              key={company.id}
              index={index}
              name={company.name}
              email={company.email}
              role="Company"
              imageUrl={company.imageUrl}
              isOpen={index === openDropdownIndex}
              onOpen={toggleDropdown}
              onEdit={() => handleUpdateCompany(company)}
              onDelete={handleDeleteCompany}
              company={company}
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
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block font-medium text-gray-700"
              >
                Company Logo
              </label>
              <input
                type="file"
                id="image"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                onChange={(e) => setImageUpload(e.target.files?.[0] || null)}
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

      {showEditModal && editCompany && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Edit Company</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={editCompany.name}
                onChange={(e) =>
                  setEditCompany({ ...editCompany, name: e.target.value })
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
                value={editCompany.email}
                onChange={(e) =>
                  setEditCompany({ ...editCompany, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block font-medium text-gray-700"
              >
                Company Logo
              </label>
              <input
                type="file"
                id="image"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                onChange={(e) => setImageUpload(e.target.files?.[0] || null)}
              />
              {editCompany.imageUrl && (
                <img
                  src={editCompany.imageUrl}
                  alt="Company Logo"
                  className="mt-2 w-24 h-24 rounded-full"
                />
              )}
            </div>
            <div className="mb-4 flex items-center">
              <div
                className={`relative flex items-center bg-main rounded-full w-12 h-6 transition-colors duration-300 ${
                  editCompany.isLogInEnabled ? "bg-main" : ""
                }`}
                onClick={() =>
                  setEditCompany({
                    ...editCompany,
                    isLogInEnabled: !editCompany.isLogInEnabled,
                  })
                }
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    editCompany.isLogInEnabled
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
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-main text-white px-4 py-2 rounded-md"
                onClick={handleEditCompanySubmit}
              >
                Save
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
  onEdit,
  onDelete,
  company,
}: UserCardProps) => {
  const segments = useSelectedLayoutSegments();
  const router = useRouter();

  const handleUpgradePlanClick = () => {
    router.push("../plans");
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); // New state for delete confirmation

  const handleConfirmDelete = () => {
    setShowConfirmDelete(true); // Show delete confirmation
    onOpen(-1); // Close the dropdown menu
  };

  const confirmDelete = () => {
    setShowConfirmDelete(false);
    onDelete(company.id);
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
  };

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
            <div style={{ marginTop: "-12px" }}>
              <span className="bg-main text-white font-bold mt-8 py-1 px-3 rounded">
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
              {isOpen &&
                !showConfirmDelete && ( // Show dropdown only when delete confirmation is not shown
                  <div
                    ref={dropdownRef}
                    className="bg-white rounded-lg border border-green-400 mt-2 py-2 w-48 absolute z-10 left-0 right-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div
                      className="flex items-center px-4 py-2 rounded-t-lg hover:bg-main cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      onClick={() => {
                        onEdit(company);
                        onOpen(-1); // Add this line to close the dropdown
                      }}
                    >
                      <PencilSimple size={16} className="mr-2" />
                      <span>Edit</span>
                    </div>
                    <div
                      className="flex items-center px-4 py-2 rounded-b-lg hover:bg-main cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      onClick={handleConfirmDelete}
                    >
                      <Trash size={16} className="mr-2" />
                      <span>Delete</span>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="block justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="rounded-full ml-14 mt-6 w-[14vh] h-[14vh]"
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className=" px-4 py-2 rounded-md mr-2">FREE</div>
          <button
            className="bg-main text-white px-4 py-2 rounded-md"
            onClick={handleUpgradePlanClick}
          >
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
      {showConfirmDelete && ( // Show delete confirmation modal
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this company?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                onClick={cancelDelete}
              >
                No
              </button>
              <button
                className="bg-main text-white px-4 py-2 rounded-md"
                onClick={confirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyManagementPage;
