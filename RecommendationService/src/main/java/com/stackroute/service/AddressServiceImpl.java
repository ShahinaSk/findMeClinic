package com.stackroute.service;

import com.stackroute.domain.Address;
import com.stackroute.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    AddressRepository addressRepository;

    @Autowired
    public AddressServiceImpl(AddressRepository addressRepository) {

        this.addressRepository = addressRepository;
    }

    @Override
    public Address save(Address address) {
        if (!addressRepository.existsById(address.getPinCode())){
            return addressRepository.save(address);
        }
        return addressRepository.findById(address.getPinCode()).get();
    }
}
