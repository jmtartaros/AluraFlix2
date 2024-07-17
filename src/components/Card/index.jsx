/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardStyles = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 25px;
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  background-color: black;
  img {
    width: 100%;
    height: 250px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 200px;
    img {
      width: 150px;
    }
  }
`;
const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  margin-top: -1.3rem;
`;

const BtnCard = styled.button`
  height: 50px;
  width: 180px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: black;
  padding: 0;
  font-size: 1.2rem;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const Card = (props) => {
  const {
    id,
    title,
    img,
    handleShow,
    videoUrl,
    genero,
    artist,
    onDelete,
    open,
  } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <>
      <CardStyles
        key={id}
        onClick={() => handleShow({ id, url: videoUrl, title, genero, artist })}
      >
        <img src={img} alt={title} />;
        <ContainerBtn>
          <BtnCard onClick={handleDelete}>
            <img src="/img/delete.png" alt="delete" />
            Delete
          </BtnCard>
          <BtnCard onClick={open}>
            <img src="/img/edit.png" alt="edit" />
            Edit
          </BtnCard>
        </ContainerBtn>
      </CardStyles>
    </>
  );
};
export default Card;
