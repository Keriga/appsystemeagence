package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Client;

public interface IClientDao {
	
	public Client addClient(Client cl);
	
	public List<Client> getAllClient(Client cl);
	
	public Client updateClient(Client cl);
	
	public int deleteClient();
	
	public Client getClientById(Client cl);

}
