/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [newVideo, setNewVideo] = useState([]);
  const [colores, setColores] = useState([
    {
      id: 1,
      genero: "metal",
      colorFondo: "#000000",
      colorLetra: "#fff",
    },
    {
      id: 2,
      genero: "rock",
      colorFondo: "#ff0000",
      colorLetra: "#fff",
    },
    {
      id: 3,
      genero: "hip hop",
      colorFondo: "#FFD700",
      colorLetra: "#fff",
    },
    {
      id: 4,
      genero: "jazz",
      colorFondo: "brown",
      colorLetra: "#fff",
    },
    {
      id: 5,
      genero: "classical",
      colorFondo: "beige",
      colorLetra: "#000",
    },
  ]);
  const [showVideo, setShowVideo] = useState(null);
  const [estadoBtn, setEstadoBtn] = useState(false);

  const handleShow = (video) => {
    setShowVideo(video);
  };
  const apiSong =
    "https://my-json-server.typicode.com/jmtartaros/apiSong/songs";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiSong);
      const data = await res.json();
      setVideos(data);
      const uniqueGeneros = [...new Set(data.map((video) => video.genero))];

      setGeneros(uniqueGeneros);
    };
    fetchData();
  }, []);

  const colorDelFondo = (genero) => {
    const colorData = colores.find((color) => color.genero === genero);
    return colorData ? colorData.colorFondo : "gray"; // Color por defecto
  };

  const registrarVideo = (video) => {
    console.log("No se que estoy haciendo xd", video);
    setNewVideo([...newVideo, video]);
  };
  const addVideo = (video) => {
    setVideos((prevVideos) => [
      ...prevVideos,
      { ...video, id: prevVideos.length + 1 },
    ]);
  };

  const updateVideo = (updatedVideo) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  const addGenero = (genero) => {
    if (!generos.includes(genero)) {
      setGeneros((prevGeneros) => [...prevGeneros, genero]);
    }
  };

  const deleteVideo = (id) => {
    const deleteId = videos.filter((video) => video.id !== id);
    setVideos(deleteId);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        addVideo,
        updateVideo,
        deleteVideo,
        generos,
        registrarVideo,
        addGenero,
        setGeneros,
        colores,
        colorDelFondo,
        showVideo,
        handleShow,
        setColores,
        setEstadoBtn,
        estadoBtn,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
