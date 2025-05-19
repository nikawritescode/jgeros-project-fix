import { Input } from '@/components/ui/input';

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="mb-2"
    />
  );
}
