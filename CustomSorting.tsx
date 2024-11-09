import React, { ReactNode } from 'react';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

interface CustomSortingProps {
  setSort: React.Dispatch<React.SetStateAction<'noSort' | 'sortAsc' | 'sortDesc'>>;
  sort: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

const CustomSorting: React.FC<CustomSortingProps> = ({ setSort, sort, children }) => {
  const returnSortIcon = (state: string) => {
    switch (state) {
      case 'noSort':
        return faSort;
      case 'sortAsc':
        return faSortUp;
      case 'sortDesc':
        return faSortDown;
      default:
        return faSort;
    }
  };

  return (
    <div>
      <span>
        {children}
        <Button
          className="no-button"
          onClick={() => {
            switch (sort) {
              case 'noSort':
                setSort('sortAsc');
                break;
              case 'sortAsc':
                setSort('sortDesc');
                break;
              case 'sortDesc':
                setSort('noSort');
                break;
              default:
                setSort('noSort');
            }
          }}
        >
          <FontAwesomeIcon icon={returnSortIcon(sort)} />
        </Button>
      </span>
    </div>
  );
};

export default CustomSorting;
