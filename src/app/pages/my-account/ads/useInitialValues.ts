import { useMemo } from 'react'
import { useAppSelector } from '../../../../store'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import { ADS_ROUTES } from '../../../../@constants/routes.ts'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'

interface Params {
  callback: (values: string[]) => void
}

export const useInitialValues = ({ callback }: Params) => {
  const path = usePathname()
  const isSellPath = path.includes(ADS_ROUTES.SELL_ADS)
  const isRentPath = path.includes(ADS_ROUTES.RENT_ADS)

  const currentEstate = useAppSelector(selectCurrentEstate)
  return useMemo(() => {
    if (isSellPath || isRentPath) {
      const address = currentEstate?.addressLocation.split(' ')
      const images = currentEstate?.images.map((image) => image.url)
      if (images && images.length) {
        callback(images)
      }
      return {
        typeKey: currentEstate?.typeKey || '',
        label: currentEstate?.label || '',
        country: currentEstate?.country || '',
        city: (address && address[1]) || '',
        postCode: (address && address[0]) || '',
        visibleDetailedAddress: currentEstate?.visibleDetailedAddress
          ? 'yes'
          : 'no',
        street: currentEstate?.street || '',
        number: currentEstate?.number || '',
        rentFormation: currentEstate?.rentFormation || '',
        yearBuilt: currentEstate?.yearBuilt || '',
        floors: currentEstate?.floors || '',
        livingAreaM2: currentEstate?.livingAreaM2 || '',
        balcony: currentEstate?.balcony || '',
        terrace: currentEstate?.terrace || '',
        landAreaM2: currentEstate?.landAreaM2 || '',
        heating: currentEstate?.heating || '',
        energyCertificate: currentEstate?.energyCertificate || '',
        HBW: currentEstate?.HBW || '',
        HBWEnergyClass: currentEstate?.HBWEnergyClass || '',
        fGEE: currentEstate?.fGEE || '',
        fGEEEnergyClass: currentEstate?.fGEEEnergyClass || '',
        cellar: currentEstate?.cellar ? 'yes' : 'no',
        price: currentEstate?.price || '',
        parkPlacePrice: currentEstate?.parkPlacePrice || '',
        garage: currentEstate?.garage || '',
        rooms: currentEstate?.rooms || '',
        bathroomsTotal: currentEstate?.bathroomsTotal || '',
        state: currentEstate?.state || '',
        netOperationCosts: currentEstate?.netOperationCosts || '',
        brokerCommissions: currentEstate?.brokerCommissions || '',
        brokerCommissionsPercentage:
          currentEstate?.brokerCommissionsPercentage || '',
        propertyDescriptions: currentEstate?.propertyDescriptions || '',
        locationDescriptions: currentEstate?.locationDescriptions || '',
        addressLat: currentEstate?.addressLat || '',
        addressLng: currentEstate?.addressLng || '',
        images: images || [],
      }
    }
    return {
      typeKey: '',
      label: '',
      country: '',
      city: '',
      postCode: '',
      visibleDetailedAddress: 'no',
      street: '',
      number: '',
      rentFormation: '',
      yearBuilt: '',
      floors: '',
      livingAreaM2: '',
      balcony: '',
      terrace: '',
      landAreaM2: '',
      heating: '',
      energyCertificate: '',
      HBW: '',
      HBWEnergyClass: '',
      fGEE: '',
      fGEEEnergyClass: '',
      cellar: 'no',
      price: '',
      parkPlacePrice: '',
      garage: '',
      rooms: 1,
      bathroomsTotal: '',
      state: '',
      netOperationCosts: '',
      brokerCommissions: '',
      brokerCommissionsPercentage: '',
      propertyDescriptions: '',
      locationDescriptions: '',
      addressLat: '',
      addressLng: '',
      images: [],
    }
  }, [currentEstate])
}
