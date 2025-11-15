"use client";

import { useState } from "react";
import { Trash2, Edit, Search, Plus, UserPlus, Lock, User } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DeleteConfirmationDialog } from "@/components/DeleteConfirmationDialog";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {id:1,name:'Ministry of Health',profilepic:'/images/pp.png',email:'info@moh.gov.rw',phone:'+250788000111',role:'Government Agency',company:'Ministry of Health',status:'online'},
    {id:2,name:'Emmanuel Byiringiro',profilepic:'/images/pp.png',email:'emmanuel.b@example.com',phone:'+250788123456',role:'Agriculture Specialist',company:'AgriTech Solutions',status:'offline'},
    {id:3,name:'Alice Mukamana',profilepic:'/images/pp.png',email:'alice.m@example.com',phone:'+250788234567',role:'Transport Engineer',company:'InfraTrans Ltd',status:'online'},
    {id:4,name:'Jean Claude Nshimiyimana',profilepic:'/images/pp.png',email:'jcnshimiyimana@example.com',phone:'+250788345678',role:'Education Researcher',company:'EduTech Rwanda',status:'hybrid'},
    {id:5,name:'Grace Uwase',profilepic:'/images/pp.png',email:'grace.uwase@example.com',phone:'+250788456789',role:'Financial Analyst',company:'Rwanda Revenue Authority',status:'online'},
    {id:6,name:'Samuel Mugisha',profilepic:'/images/pp.png',email:'sam.mugisha@example.com',phone:'+250788567890',role:'Environmental Officer',company:'Kigali Environmental Unit',status:'offline'},
    {id:8,name:'Patrick Habimana',profilepic:'/images/pp.png',email:'patrick.h@example.com',phone:'+250788789012',role:'Security Analyst',company:'Rwanda National Police',status:'hybrid'},
    {id:9,name:'Linda Ingabire',profilepic:'/images/pp.png',email:'linda.ingabire@example.com',phone:'+250788890123',role:'Tourism Consultant',company:'Rwanda Development Board',status:'online'}
  ]);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    company: '',
    status: 'online'
  });

  const handleDeleteClick = (userId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setUserToDelete(userId);
    setDeleteDialogOpen(true);
  };

  const handleEditClick = (user: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingUser({...user});
  };

  const handleSaveEdit = () => {
    if (!editingUser) return;
    
    setUsers(users.map(user => 
      user.id === editingUser.id ? { ...user, ...editingUser } : user
    ));
    
    setEditingUser(null);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      const updatedUsers = users.filter(user => user.id !== userToDelete);
      setUsers(updatedUsers);
      setDeleteDialogOpen(false);
    }
  };

  const handleAddUser = () => {
    const newUserWithId = {
      ...newUser,
      id: Math.max(...users.map(u => u.id), 0) + 1,
      profilepic: '/images/pp.png'
    };
    setUsers([...users, newUserWithId]);
    setIsAddUserDialogOpen(false);
    setNewUser({
      name: '',
      email: '',
      phone: '',
      role: '',
      company: '',
      status: 'online'
    });
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col space-y-2 mb-6">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-gray-400 text-xs">Manage your team members and their account permissions.</p>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 flex-1 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-md text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setIsAddUserDialogOpen(true)}
            className="flex items-center space-x-2 border hover:bg-white/10 text-white px-4 py-2 rounded-md text-xs font-medium w-full sm:w-auto justify-center"
          >
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-3 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className={`hover:bg-gray-800/50 ${users.indexOf(user) % 2 === 0 ? 'bg-[#0A1330]' : ''}`}>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img src={user.profilepic} className="h-8 w-8 rounded-full object-cover" />
                        <div className="ml-3">
                          <div className="text-xs font-medium text-white">{user.name}</div>
                          <div className="text-[10px] text-gray-400">{user.company}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-xs text-gray-300 truncate max-w-xs">{user.email}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-xs text-gray-300">{user.phone}</td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-[10px] leading-5 font-semibold rounded-full text-gray-300">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium ${
                        user.status === 'online' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
                      }`}>
                        <span className={`inline-block h-2 w-2 rounded-full mr-1 ${
                          user.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                        }`}></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-right text-xs font-medium">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={(e) => handleEditClick(user, e)}
                          className="text-gray-400 hover:text-blue-400 p-1"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={(e) => handleDeleteClick(user.id, e)}
                          className="text-gray-400 hover:text-red-400 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-800">
          <div className="text-xs text-gray-400 mb-4 sm:mb-0">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
            <span className="font-medium">{filteredUsers.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded-md border border-gray-700 text-xs font-medium text-gray-300 hover:bg-gray-800 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-700 text-xs font-medium text-gray-300 hover:bg-gray-800 disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
        <DialogContent className="sm:max-w-2xl bg-[#09111E] border border-gray-700 text-white p-0">
          <DialogHeader className="p-6 pb-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <UserPlus className="h-5 w-5 text-blue-500" />
              <DialogTitle className="text-xl font-semibold">Add New User</DialogTitle>
            </div>
          </DialogHeader>

          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Full name*</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email address*</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Role*</label>
                  <input
                    type="text"
                    placeholder="Enter role"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Company</label>
                  <input
                    type="text"
                    placeholder="Enter company"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.company}
                    onChange={(e) => setNewUser({...newUser, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter phone"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Status</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.status}
                    onChange={(e) => setNewUser({...newUser, status: e.target.value})}
                  >
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Lock className="h-4 w-4 text-gray-400" />
                Permissions & Role access
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "View and submit problems",
                  "Edit and resubmit rejected solution",
                  "Upload solutions",
                  "View feedback and status updates",
                ].map((permission) => (
                  <label
                    key={permission}
                    className="flex items-center rounded border p-2 gap-2 text-xs text-gray-300 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                      defaultChecked={permission === "View and submit problems"}
                    />
                    <span>{permission}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 p-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => setIsAddUserDialogOpen(false)}
              className="px-6 py-2 text-sm font-medium text-white border border-gray-600 rounded-md hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleAddUser}
              className="px-6 py-2 text-sm font-medium text-white bg-[#0A1330] rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!newUser.name || !newUser.email || !newUser.role}
            >
              Add User
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!editingUser} onOpenChange={(open) => !open && setEditingUser(null)}>
        <DialogContent className="sm:max-w-2xl bg-[#09111E] border border-gray-700 text-white p-0">
          <DialogHeader className="p-6 pb-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <UserPlus className="h-5 w-5 text-blue-500" />
              <DialogTitle className="text-xl font-semibold">Edit User</DialogTitle>
            </div>
          </DialogHeader>

          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Full name*</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editingUser?.name || ''}
                    onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email address*</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editingUser?.email || ''}
                    onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Role*</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editingUser?.role || ''}
                    onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Company</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editingUser?.company || ''}
                    onChange={(e) => setEditingUser({...editingUser, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editingUser?.phone || ''}
                    onChange={(e) => setEditingUser({...editingUser, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Status</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editingUser?.status || 'online'}
                    onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}
                  >
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Lock className="h-4 w-4 text-gray-400" />
                Permissions & Role access
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "View and submit problems",
                  "Edit and resubmit rejected solution",
                  "Upload solutions",
                  "View feedback and status updates",
                ].map((permission) => (
                  <label
                    key={permission}
                    className="flex items-center rounded border p-2 gap-2 text-xs text-gray-300 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                      defaultChecked={permission === "View and submit problems"}
                    />
                    <span>{permission}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 p-6 pt-4 border-t border-gray-700">
            <button
              onClick={() => setEditingUser(null)}
              className="px-6 py-2 text-sm font-medium text-white border border-gray-600 rounded-md hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveEdit}
              className="px-6 py-2 text-sm font-medium text-white bg-[#0A1330] rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!editingUser?.name || !editingUser?.email || !editingUser?.role}
            >
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <DeleteConfirmationDialog
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default UsersPage;