import { roleOptions, type UserRole } from "@/types/roles";

interface RoleSelectionModalProps {
  isOpen: boolean;
  onRoleSelect: (role: UserRole) => void;
}

/**
 * Role selection modal shown on first visit
 *
 * Features:
 * - Full-screen overlay for focused selection
 * - Three role options with icons and descriptions
 * - Can be dismissed to show later
 */
export function RoleSelectionModal({ isOpen, onRoleSelect }: RoleSelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Welcome to SalesDuo
          </h2>
          <p className="text-lg text-text-secondary">
            Tell us about yourself to get started
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 max-w-lg mx-auto">
          {roleOptions.map((option) => (
            <button
              key={option.role}
              onClick={() => onRoleSelect(option.role)}
              className="flex items-center gap-4 p-4 bg-surface border-2 border-border rounded-lg hover:border-accent hover:bg-background transition-all text-left group"
            >
              <div className="flex-shrink-0">
                <option.icon className="w-6 h-6 text-text-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
                  {option.role}
                </div>
                <div className="text-sm text-text-muted">
                  {option.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-text-muted mt-8">
          You can change this anytime from the navbar
        </p>
      </div>
    </div>
  );
}
