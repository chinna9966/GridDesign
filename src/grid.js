import Card from "./card";
import { details } from "./info";
export default function Grid() {
  var i = 0;

  return (
    <div className="grid">
      {details.map((blog) => {
        i++;
        return (
          <Card
            key={i}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            desc={blog.description}
            link={blog.link}
          />
        );
      })}
    </div>
  );
}
