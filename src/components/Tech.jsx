import { LinearGradient } from 'react-text-gradients'

export default function Tech() {
  return (
    <div>
      <div className="w-full lg:flex bg-black text-white pt-[5px] animate-jump-in">
        <div className="flex flex-col items-center justify-center h-[400px] lg:w-1/2 m-[30px]  lg:space-y-10">
          <div className="text-center pt-[20px]">
            <h1 className='mt-[-60px] text-3xl text-center'>
              <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                Key Technologies
              </LinearGradient>
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-10 lg:m-[50px] mt-[80px]">
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                alt="ts"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACYy84J66LjDkWwtWiUsOiQHsCIFIifO-ZATQc908LV1G2iGA_WPwttJEwxEeRHECjLcNMMTV-DsELUiBf1PN8zxC-A0IkJb_LDE0frLdeBJOqTnFvxpFufy96VT35lzGA5lMea74L1NY_lqheXs-A-FZ7P5nAXumRWntHY9ZO-B2mNMx7JCEBjvTW-rms6gahNMmvmVMQREN9XMua7QJ1TXeRAk-lI5IA0T0AntZDLbpUv-Cz34LoCawChLMihZHrdb2ASwrQXpYi5MFpinjk4yK4ENv0xv8iV7XSNc8DBHgjXvFWdtBRfXBKuPBqnn2zk/p.png"
                alt="nextJS"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACaRqfHGLfx1_Tg7DZxg-IhK9yCjDWT50wmCIlIyiIeYAV7_W_BJWpr-A5wdhzRtWYhJA2ZMGwH2LXljgHzQ6N5fwuOC3H0mhV2Zj5GcNmPWl1-z5IKRPFSbOHJqxFBNWzJK3yp2HA7SG2tUR8GyOrlqCFlSZEPuYDopJpLazHcew2uRWHPxUM_QZnO0i3QedgR3i8OS08EaApTeobkRFGrv34itm1m3iNNndxsZ1cVUYmlzPbwSrc30Ln9TpzjJrqufPUeAmvs00VhnrTKRlfklvaBMUYIlpE_1TaYIbHG1tIb8oV2qkaQ9Ki-7tTfVSqk/p.png"
                alt="react"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACYcgikKJGYT3unZcZt3NqpLszNXRh8n429WSJ5LP4Y8N3BGHCVl6Uxbhv3tRusCZQfi0-BGF5O0jmhLz3_7AG--wOZ7XMUqVRucMQzQvd9r9TcoJEEMTEH-HpgxadsQKRCkmeaw2GumhcUWQhIWLyzadViwSC_w18jY7gry11KBXarhSpQ0BKi6azqf7hPJhD3fo77oniPMqZTqwZ9OW9c0iPfOZfCILbp4TqlPLxfBR9U0-ROKgylo26MijYLQwELEaeOEbmgr5fRW3ROzDbGsPTmdfuvPuyGEcHCLSDSifWks1ojXKvBFrWPlMhOIB2M/p.png"
                alt="expo"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACbpZfwBD9HenGM7QV2PoGlw00Ujds3zDv2Q4jHiL3jB4m4Cxh-E5XEanUJHFSVhKH_h3VLbIuuPXrJClUS0GJDyv7gdkZ20bgldJfqFOMkUWkGIiS4PDQAwdNya5DSSi8DVxvcgDbpW1bVeRb-39Ak6uTD_bwc0ijZOlloSp1fBmhVI-pm5p9sr5K1cqpJxq-TWfFzIPLBMfrZrY2Vg_h4gkWyV2Po38Vra7elW2GD6qfTJdN2l4w7j8yCP2ruSaM95uE7OL8uzGzTWTop1N1nDFDXeF375WMg7CRDm9RfnZAK6JsCdzhf0qQjO5rWVw48/p.png"
                alt="fastAPI"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACZQTwslxQvSrClWuc_tQFWkF7dL2SYbopGR_oVFgyXUH2Mk6EvMjf2oTR2VdvKNG8MsyuPsZJCgw11MUYkYyJrVl164ytvCakJOaua91Vb1YeNAVOmmiVC8XWqYixxTeZKIcfkhgLfQqK5yPpJUY4Pn0GdjvmYK56tP6EXIc7qcpU9zceXKNXwPsL7c9p0s7-B5FqsNG2O93drUIYAnC1fDLS8yACe5syWHDFEyvDZ-gnTXVdqqCrW5pMR1tGFPtMEoHxinexesZoXfJEIQ0e_q6wKrKLqXNe0FjIAbRBLlD6SybRuA5vYQtTrkNJVW5KhDjDjsQSG7TpMriorcg9kE/p.png?is_prewarmed=true"
                alt="postgres"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACbt41rjtID4eEbLXiTVLI5sRNNVaTeuFWuQIOXTfMu2oe8BZ8GYtUnYCy5qowu0gIjCr1MepCJRIv8yU6Whdfv0wWQorr8QGuJKmiuTTV8CcPGga7-xoPvFwtkfmWnKGOEgLCaxh9fA55IIWJmnjJYXsrvGvyXLMg1ajPwh42z2R4IQHYaHXjIx5pKaF38G7BfWSVLXVTirJdib7h_u-IKotWHy5Td9fJSAp3w1Zo7Vezck43PY2nxsUKwuAwn8cP4MK7hd85aqu-u9-D23x2YTrVrcsUBtQdmGyJjU3Dnox-HAWTuycJK6ikLmchd1A_w/p.png"
                alt="flutter"
                width="60"
                height="60"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://previews.dropbox.com/p/thumb/ACaNbqLYJvHrU5TegMcIt6yc-3-UtrLxIdtGXwjJpFG3OS9A_gwH1icjgXz9FOCh3YIRWB7gYZLVvNHUacFxr7O7qLjqsdx1LmIcvKnpkwZfdHpQti7Nq23ZNzjJtfiL7wheWVzepe0xDTmyo7rGTJ6pDmAvxim5rgAmvTtc9BdQCXuFnH3BfGG0xB-mECqJX8ax64xOMqumIdJwn_vhmQpEsWBiLa7eiyy69ZgeHLvNRNVkYFGvfVt2OhpBNhq1cwUQj_KeafLT73FZhd32zrFgqu6WRFUSWg6otO0o-OTrEDuDQusHOOHG726x2eE9b78/p.png"
                alt="mongo"
                width="80"
                height="80"
              />
            </div>
          </div>

        </div>
        <div className="lg:w-1/2   flex items-center justify-center text-sm">
          <div>
            <img
              src="https://i.ibb.co/wss5H2T/animated-programmer-guy-coding-790a0bs8e8thpisg.gif"
              alt=""
              className="w-[380px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
