"use client";

import { useState, useEffect } from "react";
import { UserRole, ROLE_STORAGE_KEY } from "@/types/roles";

export interface UseUserRoleReturn {
  selectedRole: UserRole | null;
  showRoleModal: boolean;
  setShowRoleModal: (show: boolean) => void;
  updateRole: (role: UserRole) => void;
  isLoading: boolean;
}

/**
 * Custom hook for managing user role selection and persistence
 *
 * Features:
 * - Reads role from localStorage on mount
 * - Persists role changes to localStorage
 * - Shows modal if no role is selected
 * - Provides loading state during hydration
 *
 * @returns {UseUserRoleReturn} Role state and management functions
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { selectedRole, updateRole, showRoleModal } = useUserRole();
 *
 *   if (showRoleModal) {
 *     return <RoleSelectionModal onSelect={updateRole} />;
 *   }
 *
 *   return <div>Current role: {selectedRole}</div>;
 * }
 * ```
 */
export function useUserRole(): UseUserRoleReturn {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load role from localStorage on mount
  useEffect(() => {
    try {
      const savedRole = localStorage.getItem(ROLE_STORAGE_KEY);

      if (savedRole) {
        // Validate that saved role is still a valid UserRole
        const validRoles: UserRole[] = [
          "Lead Generation Agency",
          "Recruitment Agency",
          "B2B Marketing Leader"
        ];

        if (validRoles.includes(savedRole as UserRole)) {
          setSelectedRole(savedRole as UserRole);
        } else {
          // Invalid role stored, clear it
          localStorage.removeItem(ROLE_STORAGE_KEY);
          setShowRoleModal(true);
        }
      } else {
        // No role selected yet, show modal
        setShowRoleModal(true);
      }
    } catch (error) {
      // localStorage might not be available (SSR, privacy mode, etc.)
      console.warn("Failed to load role from localStorage:", error);
      setShowRoleModal(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Update the selected role and persist to localStorage
   */
  const updateRole = (role: UserRole) => {
    setSelectedRole(role);
    setShowRoleModal(false);

    try {
      localStorage.setItem(ROLE_STORAGE_KEY, role);
    } catch (error) {
      console.warn("Failed to save role to localStorage:", error);
    }
  };

  return {
    selectedRole,
    showRoleModal,
    setShowRoleModal,
    updateRole,
    isLoading,
  };
}
