package br.com.ttrans.samapp.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;

import br.com.ttrans.samapp.dao.ProgramacaoDao;
import br.com.ttrans.samapp.model.Programacao;

@Repository
public class ProgramacaoDaoImpl implements ProgramacaoDao {
	
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Programacao obj, Authentication authentication) {
		session.getCurrentSession().save(obj);

	}

	@Override
	public void edit(Programacao obj, Authentication authentication) {
		session.getCurrentSession().update(obj);

	}

	@Override
	public void delete(Programacao obj, Authentication authentication) {
		session.getCurrentSession().delete(obj);

	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Programacao> loadData() {
		return session.getCurrentSession().createCriteria(Programacao.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();
	}

}
