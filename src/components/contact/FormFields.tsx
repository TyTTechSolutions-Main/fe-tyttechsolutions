import type { FormField } from "../../types/formTypes";

interface FormFieldsProps {
  fields: FormField[];
  formData: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ fields, formData, handleChange }) => {
  return (
    <>
      {fields.map((field: FormField) => (
        <div key={field.id}>
          {field.type === "textarea" ? (
            <textarea
              name={field.id}
              className="w-full border border-white rounded-lg p-3 bg-transparent text-white"
              placeholder={field.label}
              onChange={handleChange}
              value={formData[field.id] || ""}
            />
          ) : (
            <input
              name={field.id}
              type={field.type}
              className="w-full border border-white rounded-lg p-3 bg-transparent text-white"
              placeholder={field.label}
              onChange={handleChange}
              value={formData[field.id] || ""}
            />
          )}
        </div>
      ))}
    </>
  );
};
