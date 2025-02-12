import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { IMetaDataProps } from "../interfaces/meta.interfaces";

const MetaData: FC<IMetaDataProps> = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>ElevanceNet | {title}</title>
      </Helmet>
    </>
  );
};

export default MetaData;
