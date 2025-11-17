"use client";
import { useState, useRef, ChangeEvent } from 'react';
import { Upload, X, Phone, Briefcase, MapPin, Globe } from 'lucide-react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: 'John Carter',
    email: 'john@dashdark.com',
    bio: '',
    phone: '',
    position: '',
    location: '',
    website: ''
  });
  const [profileImage, setProfileImage] = useState<string | null>('/Avatar-Circle.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, profileImage: profileImage ? 'Image uploaded' : 'No image' });
  };

  return (
    <div className="min-h-screen bg-[#09111E] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-8">Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#0B1226] rounded-lg p-6">
            <h2 className="text-base font-medium mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Photo Section */}
              <div className="md:col-span-1">
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full bg-[#0B1226] flex items-center justify-center overflow-hidden mb-2">
                    <img 
                      src={profileImage || '/Avatar-Circle.png'} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-xs text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1 mx-auto"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Change photo</span>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                    {profileImage && profileImage !== '/pp.png' && (
                      <button
                        type="button"
                        onClick={removeImage}
                        className="mt-1 text-xs text-red-400 hover:text-red-300 flex items-center gap-1 mx-auto"
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Personal Information Fields */}
              <div className="md:col-span-2 space-y-6">
            <h2 className="text-base font-medium mb-6">Personal Information</h2>
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2  border text-xs border-gray-600 rounded-md  focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2  border text-xs border-gray-600 rounded-md focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="bio" className="block text-xs font-medium mb-2">
                    Short description
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Write a short bio about you..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:border-transparent placeholder:text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="bg-[#0A1327] rounded-lg p-6">
            <h2 className="text-base font-medium mb-6">Basic Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex justify-between items-center">
                  <label htmlFor="phone" className="block text-xs font-medium mb-2 w-1/2">
                    Phone
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 placeholder:text-xs  border border-gray-600 rounded-md  focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label htmlFor="position" className="block text-xs font-medium mb-2 w-1/2">
                    Position
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full pl-10 placeholder:text-xs px-4 py-2 border border-gray-600 rounded-md focus:border-transparent"
                      placeholder="Your position"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label htmlFor="location" className="block text-xs font-medium mb-2 w-1/2">
                    Location
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full placeholder:text-xs pl-10 px-4 py-2 border border-gray-600 rounded-md focus:border-transparent"
                      placeholder="Your location"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label htmlFor="website" className="block text-xs font-medium mb-2 w-1/2">
                    Website
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full placeholder:text-xs pl-10 px-4 py-2 border border-gray-600 rounded-md focus:border-transparent"
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </form>
      </div>
    </div>
  );
}
