import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Ad details</span>
        <div className="ud-cen-s2 ad-table-inn">
          <h2>Ad Pricing and other details</h2>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Ads Name</th>
                <th>Ads Preview</th>
                <th>Ads Size</th>
                <th>Cost P/Day</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Home page Bottom</td>
                <td>
                  <img src="../images/ads/ad-size.png" alt=""/>
                </td>
                <td>728 X 90 px</td>
                <td>70$</td>
                <td><span className="db-list-rat">Active</span></td>
                <td><a href="admin-ads-price-edit.html?row=1" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>All listing page Top</td>
                <td>
                  <img src="../images/ads/ad-size.png" alt=""/>
                </td>
                <td>728 X 90 px</td>
                <td>50$</td>
                <td><span className="db-list-rat">Active</span></td>
                <td><a href="admin-ads-price-edit.html?row=2" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>All listing page Bottom</td>
                <td>
                  <img src="../images/ads/ad-size.png" alt=""/>
                </td>
                <td>728 X 90 px</td>
                <td>20$</td>
                <td><span className="db-list-rat">Active</span></td>
                <td><a href="admin-ads-price-edit.html?row=3" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>All listing page Left</td>
                <td>
                  <img src="../images/ads/ad-size.png" alt=""/>
                </td>
                <td>300 X 300 px</td>
                <td>70$</td>
                <td><span className="db-list-rat">Active</span></td>
                <td><a href="admin-ads-price-edit.html?row=4" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Listing detail page Right</td>
                <td>
                  <img src="../images/ads/ad-size.png" alt=""/>
                </td>
                <td>300 X 300 px</td>
                <td>20$</td>
                <td><span className="db-list-rat">Active</span></td>
                <td><a href="admin-ads-price-edit.html?row=5" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Listing detail page Bottom</td>
                <td>
                  <img src="../images/ads/ad-size.png" alt=""/>
                </td>
                <td>728 X 90 px</td>
                <td>40$</td>
                <td><span className="db-list-rat">Active</span></td>
                <td><a href="admin-ads-price-edit.html?row=6" className="db-list-edit">Edit</a></td>
              </tr>
              {/*                            <tr>*/}
              {/*                                <td>2</td>*/}
              {/*                                <td>All listing page<br>Top</td>*/}
              {/*                                <td>*/}
              {/*                                    <img src="../images/ads/ad-size.png" alt="">*/}
              {/*                                </td>*/}
              {/*                                <td>728 X 90 px</td>*/}
              {/*                                <td>50$</td>*/}
              {/*                                <td><span class="db-list-rat">Active</span></td>*/}
              {/*                                <td><a href="admin-ads-price-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                            </tr> */}
              {/*                            <tr>*/}
              {/*                                <td>3</td>*/}
              {/*                                <td>All listing page<br>Bottom</td>*/}
              {/*                                <td>*/}
              {/*                                    <img src="../images/ads/ad-size.png" alt="">*/}
              {/*                                </td>*/}
              {/*                                <td>728 X 90 px</td>*/}
              {/*                                <td>40$</td>*/}
              {/*                                <td><span class="db-list-rat">Active</span></td>*/}
              {/*                                <td><a href="admin-ads-price-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                            </tr>*/}
              {/*                            <tr>*/}
              {/*                                <td>4</td>*/}
              {/*                                <td>All listing page<br>Left</td>*/}
              {/*                                <td>*/}
              {/*                                    <img src="../images/ads/ad-size.png" alt="">*/}
              {/*                                </td>*/}
              {/*                                <td>300 X 300 px</td>*/}
              {/*                                <td>45$</td>*/}
              {/*                                <td><span class="db-list-rat">Active</span></td>*/}
              {/*                                <td><a href="admin-ads-price-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                            </tr>*/}
              {/*                            <tr>*/}
              {/*                                <td>5</td>*/}
              {/*                                <td>Listing detail page<br>Right</td>*/}
              {/*                                <td>*/}
              {/*                                    <img src="../images/ads/ad-size.png" alt="">*/}
              {/*                                </td>*/}
              {/*                                <td>300 X 300 px</td>*/}
              {/*                                <td>30$</td>*/}
              {/*                                <td><span class="db-list-rat">Active</span></td>*/}
              {/*                                <td><a href="admin-ads-price-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                            </tr>*/}
              {/*                            <tr>*/}
              {/*                                <td>6</td>*/}
              {/*                                <td>Listing detail page<br>Bottom</td>*/}
              {/*                                <td>*/}
              {/*                                    <img src="../images/ads/ad-size.png" alt="">*/}
              {/*                                </td>*/}
              {/*                                <td>728 X 90 px</td>*/}
              {/*                                <td>30$</td>*/}
              {/*                                <td><span class="db-list-rat">Active</span></td>*/}
              {/*                                <td><a href="admin-ads-price-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                            </tr>*/}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
