import styles from "../styles/skills.module.scss";
import { Fade } from "react-reveal";

const Skills = () => {
  const skills = [
    [
      "Deep Learning",
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 114.75 122.88"
        xmlSpace="preserve"
      >
        <g>
          <path d="M64.94,8.92c2.03,3.52,3.42,12.25,4.15,23.81h12.97V20.46c-0.28-0.13-0.55-0.28-0.81-0.45c-0.49-0.31-0.94-0.67-1.33-1.06 l-0.05-0.05c-0.69-0.69-1.24-1.52-1.62-2.44c-0.38-0.91-0.59-1.91-0.59-2.96c0-1.04,0.21-2.03,0.59-2.95 c0.39-0.95,0.97-1.8,1.67-2.51c0.71-0.71,1.56-1.28,2.51-1.67c0.91-0.38,1.91-0.59,2.95-0.59c1.04,0,2.03,0.21,2.95,0.59 c0.95,0.39,1.8,0.97,2.51,1.67c0.71,0.71,1.28,1.56,1.67,2.5l0.02,0.06c0.36,0.9,0.56,1.88,0.56,2.89c0,1.04-0.21,2.03-0.59,2.95 c-0.39,0.95-0.97,1.8-1.67,2.51l-0.06,0.06c-0.35,0.34-0.74,0.66-1.15,0.93c-0.22,0.15-0.45,0.28-0.69,0.41v15.84 c0,0.95-0.39,1.81-1.01,2.43c-0.62,0.62-1.48,1.01-2.43,1.01H69.43c0.12,3.29,0.2,6.75,0.23,10.32h30.44 c0.13-0.26,0.27-0.51,0.42-0.75l0.04-0.05c0.29-0.45,0.63-0.86,0.99-1.22c0.71-0.71,1.56-1.28,2.51-1.67l0.06-0.02 c0.9-0.36,1.88-0.57,2.89-0.57c1.04,0,2.03,0.21,2.95,0.59c0.95,0.39,1.8,0.97,2.51,1.67c0.71,0.71,1.28,1.56,1.67,2.51 c0.38,0.92,0.59,1.91,0.59,2.95c0,1.04-0.21,2.03-0.59,2.95c-0.39,0.95-0.97,1.8-1.67,2.51c-0.71,0.71-1.56,1.28-2.51,1.67 l-0.06,0.02c-0.9,0.36-1.88,0.56-2.89,0.56c-1.04,0-2.04-0.21-2.95-0.59c-0.94-0.39-1.79-0.96-2.51-1.67 c-0.38-0.38-0.72-0.8-1.02-1.27c-0.16-0.24-0.3-0.49-0.43-0.75H69.67c-0.03,3.9-0.11,7.89-0.24,11.95h37.21 c0.95,0,1.81,0.39,2.43,1.01c0.62,0.62,1.01,1.48,1.01,2.43v25.53c0.33,0.14,0.64,0.3,0.94,0.48c0.54,0.32,1.03,0.71,1.47,1.15 c0.71,0.71,1.28,1.56,1.67,2.51l0.02,0.06c0.36,0.9,0.57,1.88,0.57,2.89c0,1.04-0.21,2.03-0.59,2.95c-0.39,0.95-0.97,1.8-1.67,2.51 c-0.71,0.71-1.56,1.28-2.51,1.67c-0.91,0.38-1.91,0.59-2.95,0.59c-1.04,0-2.03-0.21-2.95-0.59c-0.95-0.39-1.8-0.97-2.51-1.67 c-0.71-0.71-1.28-1.56-1.67-2.51c-0.38-0.91-0.59-1.91-0.59-2.95c0-1.04,0.21-2.04,0.59-2.95c0.39-0.95,0.97-1.8,1.67-2.51 c0.32-0.32,0.68-0.62,1.06-0.89c0.18-0.13,0.37-0.25,0.57-0.36V75.66H69.16c-0.15,3.24-0.33,6.49-0.55,9.73h11.04 c0.95,0,1.81,0.39,2.43,1.01c0.62,0.62,1.01,1.48,1.01,2.43v13.66c0.25,0.13,0.48,0.27,0.72,0.42c0.46,0.3,0.87,0.64,1.24,1.01 l0.06,0.06c0.68,0.7,1.24,1.53,1.62,2.45c0.38,0.91,0.59,1.91,0.59,2.95c0,1.04-0.21,2.04-0.59,2.95l-0.03,0.06 c-0.39,0.93-0.96,1.76-1.65,2.45l-0.05,0.05c-0.7,0.69-1.53,1.25-2.44,1.63c-0.91,0.38-1.92,0.59-2.96,0.59 c-1.04,0-2.03-0.21-2.95-0.59c-0.95-0.39-1.8-0.97-2.51-1.67l-0.06-0.06c-0.68-0.7-1.24-1.53-1.62-2.45 c-0.38-0.92-0.59-1.91-0.59-2.95s0.21-2.03,0.59-2.95c0.39-0.95,0.96-1.8,1.67-2.51l0,0c0.39-0.39,0.83-0.74,1.29-1.04 c0.25-0.16,0.51-0.31,0.78-0.44V92.28H68.1c-0.11,1.37-0.23,2.74-0.35,4.1c-0.16,1.76-0.67,5.01-0.34,6.62 c0.88,4.27-2.97,17.15-14.29,19.52c-5.58,1.16-11.35-0.55-15.7-3.95c-3.48-2.71-6.09-6.52-7.03-10.83 c-1.82-0.07-3.67-0.44-5.47-1.04c-3.98-1.34-7.81-3.95-10.8-7.41c-3.01-3.47-5.19-7.83-5.88-12.68c-0.35-2.53-0.3-5.17,0.26-7.89 c-1.95-1.77-3.63-3.76-4.96-5.93C1.22,69.08-0.05,64.9,0,60.6c0.05-4.33,1.43-8.72,4.42-12.8c1.74-2.37,4.03-4.63,6.93-6.7 c-0.03-0.79-0.03-1.58-0.01-2.36c0.23-6.32,2.56-11.88,5.96-16.03c3.52-4.3,8.23-7.11,13.07-7.8h0.02 c0.17-0.71,0.37-1.41,0.63-2.09c1.56-4.23,4.77-7.83,8.7-10.12c3.96-2.3,8.71-3.32,13.34-2.36C57.51,1.28,61.75,3.94,64.94,8.92 L64.94,8.92L64.94,8.92z M30.77,99.21c1.64-5.16,5.97-10.31,14.14-14.48c2.04-1.03,4.52-0.23,5.57,1.8 c1.03,2.04,0.23,4.52-1.8,5.57c-7.57,3.87-10.42,8.31-10.42,12.18c0,3.02,1.72,5.84,4.22,7.8c2.54,1.97,5.82,3,8.92,2.36 c3.86-0.8,7.58-4.37,9.51-12.15V20.49c-1.93-7.72-5.65-11.27-9.5-12.07c-2.54-0.53-5.24,0.07-7.54,1.42 c-2.33,1.35-4.2,3.43-5.09,5.83c-1.18,3.2-0.48,7.13,3.52,10.83c1.66,1.55,1.77,4.14,0.22,5.8c-1.55,1.66-4.14,1.77-5.8,0.22 c-3.11-2.88-5.03-5.94-5.99-8.99c-2.45,0.59-4.87,2.21-6.83,4.59c-2.29,2.79-3.86,6.57-4.02,10.91c-0.04,1.15,0.02,2.37,0.19,3.62 h-0.01c0.22,1.62-0.5,3.3-1.98,4.21c-3,1.84-5.21,3.87-6.76,5.98c-1.88,2.56-2.74,5.25-2.77,7.84c-0.03,2.63,0.78,5.25,2.23,7.6 c1.23,1.99,2.91,3.81,4.96,5.33c1.54,1.06,2.26,3.04,1.63,4.89c-0.81,2.4-0.99,4.73-0.68,6.9c0.44,3.12,1.89,5.97,3.87,8.26 c1.99,2.3,4.51,4.02,7.09,4.9C28.69,98.96,29.74,99.16,30.77,99.21L30.77,99.21L30.77,99.21z M31.71,41.1 c1.62-1.59,4.22-1.57,5.82,0.05c1.59,1.62,1.57,4.22-0.05,5.82c-3.53,3.48-5.37,7.96-5.57,12.54c-0.19,4.72,1.34,9.58,4.56,13.57 c1.43,1.77,1.14,4.36-0.63,5.79c-1.77,1.43-4.36,1.14-5.79-0.63c-4.51-5.59-6.65-12.39-6.38-19.06 C23.96,52.56,26.62,46.1,31.71,41.1L31.71,41.1L31.71,41.1z" />
        </g>
      </svg>,
    ],
    [
      "Hydrographic Data Processing",
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 116.6 112.6"
        // style="enable-background:new 0 0 116.6 112.6;"
        xmlSpace="preserve"
      >
        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)">
          <path
            d="M503.5,1988.8c0-7-1-20-2-28c-1-10-16-17-51-20l-50-5v-45v-45l48-5c26-3,47-8,47-12c0-5,0-12,0-18s-39-10-98-10
     c-132,0-132,0-132-153v-117h-129c-72,0-132-4-136-9c-6-11,40-192,58-230c7-13,25-34,40-45c26-19,44-21,207-24c140-3,181-6,191-18
     c15-18,63-18,79,1c10,12,42,15,169,15c220,0,203-12,323,230c53,107,97,201,98,208c0,9-39,12-163,12c-141,0-168-3-200-19
     c-27-14-39-16-42-8c-51,148-60,157-157,157c-61,0-68,2-68,20c0,17,7,20,43,20c49,0,67,13,67,50s-18,50-66,50c-39,0-43,2-46,27
     C530.5,1994.8,506.5,2012.8,503.5,1988.8z M605.5,1890.8c0-19-7-20-90-20s-90,1-90,20s7,20,90,20S605.5,1909.8,605.5,1890.8z
      M683.5,1748.8c22-22,13-27-55-30l-68-3l-3-32c-2-18,2-41,8-52c16-30,67-54,106-49c40,5,41,2,12-29c-21-22-26-23-204-23h-182l2,25
     c1,25,2,25,97,25c114,0,121,5,117,82l-3,53l-100,3c-98,3-124,10-111,31C309.5,1765.8,667.5,1764.8,683.5,1748.8z M375.5,1655.8
     c0-34-1-35-38-35s-38,1-38,35s1,35,38,35S375.5,1689.8,375.5,1655.8z M485.5,1655.8c0-34-1-35-40-35s-40,1-40,35s1,35,40,35
     S485.5,1689.8,485.5,1655.8z M708.5,1683.8c2-5,7-20,11-35c6-28,6-28-48-28c-45,0-58,4-70,22c-28,40-21,48,43,48
     C677.5,1690.8,706.5,1687.8,708.5,1683.8z M1110.5,1620.8c-19-60-159-331-177-345c-18-12-54-15-177-15c-151,0-154,0-177,25
     c-13,14-32,25-44,25c-11,0-32-11-46-25c-25-25-27-25-188-25c-202,0-203,1-236,121c-12,45-24,88-27,96c-4,11,51,13,312,13h317l38,38
     c103,104,121,111,288,112C1111.5,1640.8,1116.5,1639.8,1110.5,1620.8z"
          />
          <path d="M1011.5,1571.8c-14-27-12-41,5-41c12,0,40,56,32,64C1036.5,1606.8,1025.5,1600.8,1011.5,1571.8z" />
          <path d="M940.5,1429.8c-46-95-50-109-31-109c18,0,100,155,91,170C987.5,1511.8,973.5,1497.8,940.5,1429.8z" />
          <path
            d="M251.5,1427.8c-38-28-13-97,34-97c23,0,50,32,50,58c0,20-34,52-55,52C274.5,1440.8,261.5,1434.8,251.5,1427.8z
      M298.5,1385.8c1-5-6-11-15-13c-11-2-18,3-18,13C265.5,1402.8,295.5,1403.8,298.5,1385.8z"
          />
          <path
            d="M412.5,1422.8c-22-24-21-55,1-75c24-22,45-21,65,1c22,24,21,55-1,75C453.5,1445.8,432.5,1444.8,412.5,1422.8z
      M465.5,1385.8c0-8-9-15-20-15s-20,7-20,15c0,8,9,15,20,15S465.5,1393.8,465.5,1385.8z"
          />
          <path
            d="M577.5,1424.8c-27-18-29-55-4-77c22-20,42-21,66-4c35,26,14,97-29,97C604.5,1440.8,589.5,1433.8,577.5,1424.8z
      M625.5,1385.8c0-8-6-15-14-15c-17,0-28,14-19,24C604.5,1406.8,625.5,1400.8,625.5,1385.8z"
          />
          <path
            d="M348.5,1148.8l-28-30l27-23c80-69,218-82,322-31c80,39,86,51,48,89c-29,29-32,30-49,14c-60-53-155-61-236-18l-55,29
     L348.5,1148.8z"
          />
          <path
            d="M239.5,1039.8l-28-29l24-26c38-39,157-93,233-105c50-8,87-8,138,1c78,13,192,65,229,105l24,25l-29,30l-28,30l-34-26
     c-70-54-142-78-228-79c-92,0-154,19-226,71l-47,32L239.5,1039.8z"
          />
        </g>
      </svg>,
    ],
    [
      "Computer Programming",
      <svg
        width="111"
        height="30"
        viewBox="0 0 111 69"
        fill="none"
        stroke="black"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "none" }}
      >
        <rect
          x="1.5"
          y="1.5"
          width="108"
          height="66"
          rx="3.5"
          strokeWidth="5"
        />
        <line y1="20.5" x2="111" y2="20.5" strokeWidth="5" />
        <circle cx="13" cy="10" r="5" />
        <circle cx="26" cy="10" r="5" />
        <circle cx="39" cy="10" r="5" />
        <line
          x1="46.0607"
          y1="33.0607"
          x2="35.0607"
          y2="44.0607"
          strokeWidth="5"
        />
        <path d="M45 54L34 43" strokeWidth="5" />
        <line
          y1="-1.5"
          x2="15.5563"
          y2="-1.5"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 66 32)"
          strokeWidth="5"
        />
        <path d="M66 54L77 43" strokeWidth="5" />
        <line
          x1="61.3883"
          y1="32.5679"
          x2="52.3883"
          y2="54.568"
          strokeWidth="5"
        />
      </svg>,
    ],
    [
      "Project Management",
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 114.5 122.9"
        xmlSpace="preserve"
      >
        <g>
          <path d="M105.4,76.3l3.8,3.8c1,1,1,2.6,0,3.6l-3.1,3.1c0.8,1.6,1.5,3.3,1.9,5.1h4c1.4,0,2.6,1.2,2.6,2.6v5.4 c0,1.4-1.2,2.6-2.6,2.6h-4.3c-0.5,1.7-1.3,3.4-2.2,4.9l2.8,2.8c1,1,1,2.6,0,3.6l-3.8,3.8c-1,1-2.6,1-3.6,0l-3.1-3.1 c-1.6,0.8-3.3,1.5-5.1,1.9v4c0,1.4-1.2,2.6-2.6,2.6h-5.4c-1.4,0-2.6-1.2-2.6-2.6V116c-1.7-0.5-3.4-1.3-4.9-2.2l-2.8,2.8 c-1,1-2.6,1-3.6,0l-3.8-3.8c-1-1-1-2.6,0-3.6l3.1-3.1c-0.8-1.6-1.5-3.3-1.9-5.1h-4c-1.4,0-2.6-1.2-2.6-2.6v-5.4 c0-1.4,1.2-2.6,2.6-2.6h4.3c0.5-1.7,1.3-3.4,2.2-4.9L68,82.8c-1-1-1-2.6,0-3.6l3.8-3.8c1-1,2.6-1,3.6,0l3.1,3.1 c1.6-0.8,3.3-1.5,5.1-1.9v-4c0-1.4,1.2-2.6,2.6-2.6h5.4c1.4,0,2.6,1.2,2.6,2.6v4.3c1.7,0.5,3.4,1.3,4.9,2.2l2.8-2.8 C102.7,75.3,104.4,75.3,105.4,76.3L105.4,76.3L105.4,76.3z M41.4,82.2c-1.4,0-2.5-1.4-2.5-3c0-1.7,1.1-3,2.5-3h12.4 c1.4,0,2.5,1.4,2.5,3c0,1.7-1.1,3-2.5,3H41.4L41.4,82.2L41.4,82.2z M45.1,112.3c1.7,0,3,1.4,3,3c0,1.7-1.4,3-3,3h-38 c-1.9,0-3.7-0.8-5-2.1c-1.3-1.3-2.1-3-2.1-5V7.1c0-2,0.8-3.7,2.1-5c1.3-1.3,3-2.1,5-2.1h86.7c1.9,0,3.7,0.8,5,2.1 c1.3,1.3,2.1,3,2.1,5v48.3c0,1.7-1.4,3-3,3c-1.7,0-3-1.4-3-3V7.1c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3H7.1 c-0.3,0-0.5,0.1-0.7,0.3C6.2,6.5,6.1,6.8,6.1,7.1v104.3c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.7,0.3H45.1L45.1,112.3L45.1,112.3 z M18.8,74.1h10.7c0.6,0,1,0.4,1,1v9.2c0,0.6-0.4,1-1,1H18.8c-0.6,0-1-0.4-1-1v-9.2C17.8,74.5,18.2,74.1,18.8,74.1L18.8,74.1 L18.8,74.1z M18.8,21.2h10.7c0.6,0,1,0.4,1,1v9.2c0,0.6-0.4,1-1,1H18.8c-0.6,0-1-0.4-1-1v-9.2C17.8,21.6,18.2,21.2,18.8,21.2 L18.8,21.2L18.8,21.2z M41.4,29.3c-1.4,0-2.5-1.4-2.5-3c0-1.7,1.1-3,2.5-3h34.7c1.4,0,2.5,1.4,2.5,3c0,1.7-1.1,3-2.5,3H41.4 L41.4,29.3L41.4,29.3z M21.9,57.4c-0.7,0.5-1.6,0.4-2.3-0.3c-0.1-0.1-0.1-0.1-0.2-0.2l-3.2-3.3c-0.7-0.7-0.5-1.8,0.3-2.6 c0.9-0.7,2.1-0.8,2.8-0.1l1.7,1.8l5.6-4.5c0.7-0.6,1.9-0.3,2.5,0.6c0.7,0.9,0.6,2.2-0.2,2.8L21.9,57.4L21.9,57.4L21.9,57.4z M39.7,54.8c-1.4,0-2.5-1.4-2.5-3c0-1.7,1.1-3,2.5-3h34.7c1.4,0,2.5,1.4,2.5,3c0,1.7-1.1,3-2.5,3H39.7L39.7,54.8L39.7,54.8z M88.1,85.9c5.8,0,10.6,4.7,10.6,10.6c0,5.8-4.7,10.6-10.6,10.6c-5.8,0-10.6-4.7-10.6-10.6C77.5,90.6,82.3,85.9,88.1,85.9 L88.1,85.9L88.1,85.9z" />
        </g>
      </svg>,
    ],
  ];
  return (
    <section className={styles.big_section} id="skills">
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <h3>My Skills</h3>
      </Fade>
      <div className={styles.skills}>
        {skills.map((skill, ind) => (
          <Fade
            bottom
            delay={600 + (ind - 0) * 400}
            distance={"20px"}
            count={1}
            duration={1000}
            key={ind}
          >
            <div>
              <div>{skill[1]}</div>
              {skill[0]}
              <div></div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Skills;
