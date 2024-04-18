"use client"
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react';
import { DotsThreeVertical, PencilSimple, LockKeyOpen, Trash } from 'phosphor-react';

type User = {
  name: string;
  email: string;
  role: string;
  imageUrl: string;
};

type UserCardProps = User & {
  index: number;
  isOpen: boolean;
  onOpen: (index: number) => void;
};

const Users: User[] = [
  {
    name: 'Editor',
    email: 'editor@example.com',
    role: 'Editor',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    name: 'Assistant',
    email: 'assistant@example.com',
    role: 'Assistant',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    name: 'Hedley Ware',
    email: 'lycosovyma@mailinator.com',
    role: 'Assistant',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    name: 'Emerson Harper',
    email: 'najez@mailinator.com',
    role: 'Editor',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    name: 'Dieter Montgomery',
    email: 'fetafomex@mailinator.com',
    role: 'Editor',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    name: 'Ahmed Figueroa',
    email: 'revybyvo@mailinator.com',
    role: 'Editor',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    name: 'Armando Barton',
    email: 'sema@mallinator.com',
    role: 'Editor',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

const UserManagementPage = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(index === openDropdownIndex ? -1 : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdownIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div className="flex bg-white min-h-screen" ref={containerRef}>
      <main className="py-8 px-24">
        <div className="grid h-96 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" style={{ height: '600px', gap: '20px' }}>
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
    </div>
  );
};

const UserCard = ({ index, name, email, role, imageUrl, isOpen, onOpen }: UserCardProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onOpen(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, onOpen]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 relative" style={{ height: '300px', gap: '20px' }}>
      <div className="items-center">
        <div className="items-center">
          <div className="flex">
            <div style={{ marginTop: '-10px' }}>
              <span className="bg-green-500 text-white font-bold py-1 px-3 rounded">{role}</span>
            </div>
            <div className="relative" style={{ top: '-14px', marginLeft: '180px', marginTop: '15px', position: 'absolute' }}>
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
                  <div className="flex items-center px-4 py-2 rounded-t-lg hover:bg-green-500 cursor-pointer   transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <PencilSimple size={16} className="mr-2" />
                    <span>Edit</span>
                  </div>
                  <div className="flex items-center px-4 py-2 hover:bg-green-500 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <LockKeyOpen size={16} className="mr-2" />
                    <span>Reset Password</span>
                  </div>
                  <div className="flex items-center px-4 py-2 rounded-b-lg hover:bg-green-500 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
          <img src={imageUrl} alt={name} className="rounded-full ml-10 mt-8 w-24 h-24" />
        </div>
        <div style={{ marginTop: '40px' }}>
          <h3 className="font-bold justify-center">{name}</h3>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;