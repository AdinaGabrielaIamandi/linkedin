import { PostInput } from "./PostInput";
import { PostGet } from "./PostGet";

export const SectionCenter = (props) => {
  return (
    <>
      <PostInput name={props.name} surname={props.surname} image={props.image} />
      <PostGet />
    </>
  );
};
