import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ handleChange, countOfPages }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={countOfPages}
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
}
