import $ from "./Modal.module.sass";
import Text from "components/Text/Text";

const Model = ({ title, text, children, voltar, setModal, width = '500px'}) => {
  return (
    <>
      <section className={$.containerModel} style={{maxWidth: width}}>
        {voltar && (
          <img
            onClick={() => {
              setModal(false);
            }}
            className={$.icon}
            src={`/src/assets/images/icon-seta-vermelha.png`}
          />
        )}
        {title && <Text type="Title">{title}</Text>}
        {text && <p>{text}</p>}
        <div className={$.modal_children}>{children}</div>
      </section>

      <div className={$.overlay} />
    </>
  );
};

export default Model;
