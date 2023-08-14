/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaGithub, FaJs, FaPython, FaReact, FaBeer } from "react-icons/fa";
import { DiRuby, DiMysql, DiPhp } from "react-icons/di";

interface CardCodeProps {
  title: string;
  icon?: keyof typeof icons; // Usamos 'keyof typeof icons' para inferir los nombres de iconos válidos
  text: string;
}

const icons = {
  FaBeer: FaBeer,
  FaGithub: FaGithub,
  FaJs: FaJs,
  FaReact: FaReact,
  DiRuby: DiRuby,
  DiMysql: DiMysql,
  DiPhp: DiPhp,
  FaPython: FaPython,
};

const CardCode: React.FC<CardCodeProps> = ({ title, icon = "FaJs", text }) => {
  const [colorHover, setColorHover] = useState("white");
  const [colorBorder, setColorBorder] = useState("blue-primary");

  const IconComponent = icons[icon];
  const handleHoverColor = () => {
    setColorHover("blue");
    setColorBorder("white");
  };

  const handleLeaveColor = () => {
    setColorHover("white");
    setColorBorder("blue-primary");
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-8 gradient_bg_color hover:text-white rounded-lg bg-white shadow-xl"
      onMouseEnter={handleHoverColor}
      onMouseLeave={handleLeaveColor}
    >
      <div
        className={`rounded-full w-28 h-28 flex items-center justify-center bg-${colorBorder}`}
      >
        <IconComponent size="4rem" color={colorHover} />
      </div>
      <h3 className="font-extrabold mt-6">{title}</h3>
      <p className="mt-6">{text}</p>
    </div>
  );
};

export default CardCode;
