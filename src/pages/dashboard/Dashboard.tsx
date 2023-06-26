/* eslint-disable react/no-children-prop */
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  return (
    <>
      <LayoutBaseDePagina title='Dashboard' children={undefined} barraDeFerramentas={<>Barra de Ferramentas</>}></LayoutBaseDePagina>
    </>
  );
};