import image from "../../assets/images/image-omelette.jpeg";

export default function HeaderImg() {
  return (
    <div className="sm:mx-6 sm:mt-6">
      <img
        src={image}
        alt="recipe-page-main"
        className="w-full h-full object-cover sm:rounded-2xl"
      />
    </div>
  );
}
