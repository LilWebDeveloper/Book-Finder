import Input from "@mui/base/Input";
import StyledInputElement from "../styles/SearchBarStyle";
import { useRef, useState, useEffect, InputHTMLAttributes, ForwardedRef, forwardRef, ChangeEvent } from "react";

interface SearchType {
  search: (query: string) => void;
}

const CustomInput = forwardRef(function CustomInput(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

export default function SearchBar(props: SearchType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    props.search(searchQuery)
  }, [props, searchQuery])

  return (
      <CustomInput
        ref={inputRef}
        value={searchQuery}
        onChange={changeHandler}
        aria-label="Search Book"
        placeholder="Search book by title..."
      />
  );
}
