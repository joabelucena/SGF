package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.SetorDao;
import br.com.ttrans.samapp.model.Setor;

@Repository
public class SetorDaoImpl implements SetorDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Setor obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Setor obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Setor obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	public List<Setor> loadData() {
		return session.getCurrentSession().createCriteria(Setor.class).list();
	}

}
