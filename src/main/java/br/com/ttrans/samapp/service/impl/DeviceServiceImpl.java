package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.DeviceDao;
import br.com.ttrans.samapp.model.Device;
import br.com.ttrans.samapp.service.DeviceService;

@Repository
public class DeviceServiceImpl implements DeviceService {

	@Autowired
	private DeviceDao dao;
	
	@Transactional
	public void add(Device obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Device obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Device obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Device> loadData() {
		return dao.loadData();
	}


}
