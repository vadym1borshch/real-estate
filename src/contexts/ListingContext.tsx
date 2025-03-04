import { createContext, useContext, useState, ReactNode } from 'react'

type ListingType = 'buy' | 'rent';

interface ListingContextProps {
  listingType: ListingType;
  setListingType: (type: ListingType) => void;
}

const ListingContext = createContext<ListingContextProps | undefined>(undefined)

export const ListingProvider = ({ children }: { children: ReactNode }) => {
  const [listingType, setListingType] = useState<ListingType>('buy')

  return (
    <ListingContext.Provider value={{ listingType, setListingType }}>
      {children}
    </ListingContext.Provider>
  )
}

export const useListing = (): ListingContextProps => {
  const context = useContext(ListingContext)
  if (!context) {
    throw new Error('useListing must be used within a ListingProvider')
  }
  return context
}
