"use client";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

type ParamsProps = {
  past_time: any;
};

const PostTime = ({ past_time }: ParamsProps) => {
  const pastTime = formatDistanceToNow(past_time, {
    addSuffix: true,
    locale: id,
  });
  return <p>{pastTime}</p>;
};
export default PostTime;
