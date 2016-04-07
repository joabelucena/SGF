package br.com.ttrans.samapp.dao;

import java.util.List;

import org.springframework.security.core.Authentication;

import br.com.ttrans.samapp.model.Device;

public interface DeviceDao {
	public void add(Device obj, Authentication authentication);
	public void edit(Device obj, Authentication authentication);
	public void delete(Device obj, Authentication authentication);
	public List<Device> loadData();
}
