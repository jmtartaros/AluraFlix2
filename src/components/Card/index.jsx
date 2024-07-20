/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardStyles = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 25px;
  margin: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    width: 300px;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    height: 400px;
    img {
      height: 100%;
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
  img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    cursor: pointer;
    background: transparent;
    &:hover {
      filter: drop-shadow(1px 1px 10px white);
    }
  }

  @media screen and (min-width: 330px) and (max-width: 768px) {
    img {
      width: 15px;
      height: 15px;
    }
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
          </BtnCard>
          <BtnCard onClick={open}>
            <img src="/img/edit.png" alt="edit" />
          </BtnCard>
        </ContainerBtn>
      </CardStyles>
    </>
  );
};
export default Card;
