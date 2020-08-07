import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import Input from "components/elements/Input";

function Search() {
  return (
    <Wrap>
      <Input fullWidth />
      <button className="button" type="submit">
        <MdSearch />
      </button>
    </Wrap>
  );
}

const Wrap = styled.form`
  position: relative;

  .button {
    color: gray;
    background: none;
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    :active,
    :focus {
      outline: 0;
    }
  }
`;

export default Search;
