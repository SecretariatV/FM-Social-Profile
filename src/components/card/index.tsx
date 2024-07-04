import S from "./index.module.scss";

const SOCIAL_LISTS = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

export const Card = () => {
  return (
    <div className={S.body}>
      <div className={S.info}>
        <img src="./avatar-jessica.jpeg" alt="" />
        <div className={S.userInfo}>
          <h1>Jessica Randall</h1>
          <p className="green">London, United Kingdom</p>
        </div>
        <p className="white">"Front-end developer and avid reader."</p>
      </div>
      <div className={S.socialGroup}>
        {SOCIAL_LISTS.map((social, index) => (
          <button key={index}>{social}</button>
        ))}
      </div>
    </div>
  );
};
