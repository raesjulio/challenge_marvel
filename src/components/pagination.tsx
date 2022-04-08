
import usePagination from "@mui/material/usePagination/usePagination";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useData } from "../hooks/useData";

interface Iprops {
  itemsPagination: number
}
const List = styled('ul')({
  listStyle: 'none',
  padding: "2rem 0",
  margin: 0,
  display: 'flex',
  justifyContent: "flex-end"
 
});
export default function UsePagination({ itemsPagination }: Iprops) {
  const navigate = useNavigate()
  const {valuePage, setValuePage}= useData()
  const { items, } = usePagination({
    count: itemsPagination,
    onChange: (e, page)=>{
      setValuePage(page.toString())
       navigate(`/page/${page}`)
    
    },
    page: Number(valuePage)
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (<>
            <label 
            style={
              {
                padding: "0 0.5rem",
                border: "none",
                fontSize: "1.6rem",
                color: "var(--black-text)"
              }
            }
            >...</label>
            </>);
          } else if (type === 'page') {
            children = (
              <button
              value={page?.toString()}
                type="button"
                style={{
                  padding: "0 0.5rem",
                  border: "none",
                  fontSize: "1.6rem",
                  textDecoration:selected ? 'underline' : undefined,
                  cursor:"pointer",
                  color: "var(--black-text)",
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                value=""
                style={{
                  maxWidth:"4.5ch",
                  cursor:"pointer",
                  padding: "0 0.5rem",
                  border: "none",
                  fontSize: "1.6rem",
                  color: "var(--black-text)",
                  fontWeight:"700",
                  textTransform: "capitalize"
                }}
                type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}