package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.DeviceDao;
import br.com.ttrans.samapp.model.Device;

@Repository
public class DeviceDaoImpl implements DeviceDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Device obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Device obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Device obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Device> loadData() {
		return session.getCurrentSession().createCriteria(Device.class).list();
	}

}
