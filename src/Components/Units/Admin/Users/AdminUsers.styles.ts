import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 40px;
`;

export const TitleIcon = styled(AccountCircleIcon)`
  font-size: 42px;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: #000000;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  height: 80%;
  margin-top: 2rem;
`;

export const Table = styled.section`
  display: flex;
  flex-direction: column;
  width: 1300px;
  margin: 10px 100px 100px 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  cursor: pointer;

  :hover {
    color: #1890ff;
    font-weight: 600;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  font-weight: 700;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 50%;
  font-weight: 700;
  text-align: center;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid gray;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #1890ff;
    font-weight: 600;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  margin-top: 2rem;
`;

export const SearchBarIcon = styled(SearchOutlined)`
  position: absolute;
  top: 12px;
  right: 470px;
  font-size: 16px;
`;

export const SearchBar = styled.input`
  width: 500px;
  height: 40px;
  padding: 0px 40px;
  border: none;
  border-radius: 5px;
  background-color: #ededed;

  :focus {
    outline: none;
  }
`;
