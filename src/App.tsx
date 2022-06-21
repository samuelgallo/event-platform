import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      slug
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
  slug: string;
}

function App() {
  // useEffect(() => {
  //   client.query({ query: GET_LESSONS_QUERY }).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <ul>
      {data?.lessons.map((lesson, index) => {
        return <li key={index}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
