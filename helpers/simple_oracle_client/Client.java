import java.sql. * ;

public class Client {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
	
		/*for (String s: args) {
			System.out.println("Argument: " + s);
		}*/
	
		String dbserver = args[0];
		String port = args[1];
		String username = args[2];
		String password = args[3];
		String sid = args[4];
		
		StringBuffer buf = new StringBuffer();
		byte[] bytes = new byte[4096];
    	try
    	{
    		while (System.in.available() > 0)
    		{
    			int read = System.in.read (bytes, 0, 4096);
    		}
    	} catch (Exception e)
    	{
    		e.printStackTrace ();
    	}
		
		String query = new String(bytes);
		
		Connection con = null;

		try //try connection to database
		{
			// Load driver
			//
			Class.forName("oracle.jdbc.OracleDriver");
			System.out.println("Connection: " + "jdbc:oracle:thin:" + username + "/" + password + "@" + dbserver + ":" + port + ":" +sid);
			con = DriverManager.getConnection("jdbc:oracle:thin:" + username + "/" + password + "@" + dbserver + ":" + port + ":" + sid);

			Statement stmt = con.createStatement();
			stmt.executeUpdate(query);

			con.close();

		} catch (Exception e) {
			System.err.println("Exception:" + e.getMessage());
		}
		
	}

}
