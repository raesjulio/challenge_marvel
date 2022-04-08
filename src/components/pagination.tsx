
import usePagination from "@mui/material/usePagination/usePagination";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useData } from "../hooks/useData";
interface Iprops {
  itemsPagination: number
}
const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
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
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
              value={page?.toString()}
                type="button"
                style={{
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