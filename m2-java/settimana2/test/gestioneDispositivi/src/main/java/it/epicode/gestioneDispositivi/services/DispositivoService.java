package it.epicode.gestioneDispositivi.services;

import org.hibernate.query.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import it.epicode.gestioneDispositivi.entities.Dispositivo;
import it.epicode.gestioneDispositivi.enums.StatoDispositivo;
import it.epicode.gestioneDispositivi.repositories.DispositivoRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class DispositivoService {
	@Autowired 
	 private DispositivoRepository dispositivoRepository;
	
	public Dispositivo save (Dispositivo body) {
		body.setStato(StatoDispositivo.ASSEGNATO);
		return dispositivoRepository.save(body);

}
	
	public Page<Dispositivo> getDispositivi(int page, int size, String sort) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
        return dispositivoRepository.findAll(pageable);
	
	
}
	
}
