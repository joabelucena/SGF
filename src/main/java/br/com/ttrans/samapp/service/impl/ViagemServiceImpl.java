package br.com.ttrans.samapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.ttrans.samapp.dao.ViagemDao;
import br.com.ttrans.samapp.model.Viagem;
import br.com.ttrans.samapp.service.ViagemService;

@Repository
public class ViagemServiceImpl implements ViagemService {

	@Autowired
	private ViagemDao dao;
	
	@Transactional
	public void add(Viagem obj, Authentication authentication) {
		dao.add(obj, authentication);

	}

	@Transactional
	public void edit(Viagem obj, Authentication authentication) {
		dao.edit(obj, authentication);

	}

	@Transactional
	public void delete(Viagem obj, Authentication authentication) {
		dao.delete(obj, authentication);

	}

	@Transactional
	public List<Viagem> loadData() {
		return dao.loadData();
	}
}
