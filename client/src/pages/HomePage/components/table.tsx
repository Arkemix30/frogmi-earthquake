import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Feature } from "../../../models/feature.dto";

export const HomepageTable = ({ data }: { data: Feature[] | undefined }) => {


  return (
    <>
      <Table>
        <TableCaption>Earthquake Features</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Magnitude</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {!data && <TableRow><TableCell colSpan={4}>No data</TableCell></TableRow>}
            {data?.map((feature) => (
              <TableRow key={feature.id}>
                <TableCell>{feature.attributes.title}</TableCell>
                <TableCell>{feature.attributes.place}</TableCell>
                <TableCell>{feature.attributes.mag}</TableCell>
                <TableCell><Button variant="outline"><Link to={`/features/${feature.id}`}>View</Link></Button></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
