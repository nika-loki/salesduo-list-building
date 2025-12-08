import { ChevronDown } from "lucide-react";
import { roleOptions, getRoleArticle, type UserRole } from "@/types/roles";

interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onRoleChange: (role: UserRole) => void;
  showLogo: boolean;
}

/**
 * Inline role selector dropdown in navbar
 *
 * Features:
 * - Shows "I'm a [Role]" with dropdown
 * - Smooth position transition (center → left when logo hides)
 * - Dynamic width based on selected role length
 * - ChevronDown icon for visual affordance
 */
export function RoleSelector({ selectedRole, onRoleChange, showLogo }: RoleSelectorProps) {
  if (!selectedRole) return null;

  const article = getRoleArticle(selectedRole);

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
        showLogo ? "" : "!left-6 !translate-x-0"
      }`}
    >
      <div className="flex items-center gap-2 text-sm opacity-50">
        <span className="text-text-secondary">I'm {article}</span>
        <div className="inline-block relative">
          <select
            value={selectedRole}
            onChange={(e) => onRoleChange(e.target.value as UserRole)}
            className="p-0 m-0 pr-4 bg-transparent border-0 border-b border-dashed border-text-muted text-text-secondary hover:text-text-primary appearance-none cursor-pointer hover:border-accent transition-colors focus:outline-none focus:border-accent min-w-0"
            style={{
              width: `${selectedRole.length + 2}ch`,
            }}
          >
            {roleOptions.map((option) => (
              <option key={option.role} value={option.role}>
                {option.role}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-text-muted pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
