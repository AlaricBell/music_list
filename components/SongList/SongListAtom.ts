import styled from "styled-components";

export const SongList = styled.ul`
  width: 100%;
  max-width: 420px;
  height: auto;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  border-radius: 12px;
  margin: 0 auto;
`;

export const SongListItem = styled.li`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  border: 1px solid #000;
  border-radius: 12px;
  text-align: center;
  padding: 0.25rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const SongListInput = styled.input`
  width: 100%;
  max-width: 420px;
  height: auto;
  font-size: 1.5rem;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 12px;
  text-align: center;
  padding: 0.25rem;
  margin: 0 auto 0.5rem;
  background-color: #fff;
  color: #000;
`;

export const SongListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
